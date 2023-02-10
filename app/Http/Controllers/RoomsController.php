<?php

namespace App\Http\Controllers;

use App\Models\Place;
use App\Models\Room;

use Illuminate\Http\Request;
use Encrypt;

class RoomsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $itemsPerPage = $request->itemsPerPage;
        $skip = ($request->page - 1) * $request->itemsPerPage;

        // Getting all the records
        if (($request->itemsPerPage == -1)) {
            $itemsPerPage =  Room::count();
            $skip = 0;
        }

        $sortBy = (isset($request->sortBy[0])) ? $request->sortBy[0] : 'id';
        $sort = (isset($request->sortDesc[0])) ? "asc" : 'desc';

        $search = (isset($request->search)) ? "%$request->search%" : '%%';

        $rooms = Room::allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage);
        $rooms = Encrypt::encryptObject($rooms, "id");

        $total = Room::counterPagination($search);

        return response()->json([
            "status" => 200,
            "message" => "Registros obtenidos correctamente.",
            "records" => $rooms,
            "total" => $total,
            "success" => true,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $rooms = new Room;

        $rooms->room_name = $request->room_name;
        $rooms->place_id = Place::where('place_name', $request->place_name)->first()->id;
        $rooms->deleted_at = $request->deleted_at;

        $rooms->save();

        return response()->json([
            "status" => 200,
            "message" => "Registro creado correctamente.",
            "success" => true,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Rooms  rooms
     * @return \Illuminate\Http\Response
     */
    public function show(Room $rooms)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Rooms  $rooms
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $data = Encrypt::decryptArray($request->all(), 'id');

        $rooms = Room::where('id', $data['id'])->first();
        $rooms->room_name = $request->room_name;
        $rooms->place_id = Place::where('place_name', $request->place_name)->first()->id;
        $rooms->deleted_at = $request->deleted_at;

        $rooms->save();

        return response()->json([
            "status" => 200,
            "message" => "Registro modificado correctamente.",
            "success" => true,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Rooms  $rooms
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $data = isset($request->selected) ? $request->selected : [];

        if (count($data) > 0) {
            foreach ($data as $item) {
                $item = json_decode($item);

                Room::where('id', $id)->delete();
            }

            return response()->json([
                "status" => 200,
                "message" => "Registro eliminado correctamente.",
                "success" => true,
            ]);
        }

        $id = Encrypt::decryptValue($request->id);

        Room::where('id', $id)->delete();

        return response()->json([
            "status" => 200,
            "message" => "Registro eliminado correctamente.",
            "success" => true,
        ]);
    }

    /**
     * Search All Rooms By Place Name
     *
     * @param  \App\Models\Dependence  $dependence
     * @return \Illuminate\Http\Response
     */
    public function byPlaceName(Request $request)
    {
        $rooms = Room::select('*')
            ->join('places', 'rooms.place_id', '=', 'places.id')
            ->where('places.place_name', $request->place)
            ->get();

        return response()->json(['message' => 'success', 'rooms' => $rooms]);
    }
}
