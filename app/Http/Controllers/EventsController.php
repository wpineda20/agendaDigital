<?php

namespace App\Http\Controllers;

use App\Models\Room;
use App\Models\Event;

use Illuminate\Http\Request;
use Encrypt;

class EventsController extends Controller
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
            $itemsPerPage =  Event::count();
            $skip = 0;
        }

        $sortBy = (isset($request->sortBy[0])) ? $request->sortBy[0] : 'id';
        $sort = (isset($request->sortDesc[0])) ? "asc" : 'desc';

        $search = (isset($request->search)) ? "%$request->search%" : '%%';

        $events = Event::allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage);
        $events = Encrypt::encryptObject($events, "id");

        $total = Event::counterPagination($search);

        return response()->json([
            "status" => 200,
            "message" => "Registros obtenidos correctamente.",
            "records" => $events,
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
        $data = $request->except(['place_name']);

        // dd($data);
        $events = Event::create([
            'event_name' => $data['event_name'],
            'cast_name' => $data['cast_name'],
            'event_date' => $data['event_date'],
            'start_hour_event' => $data['start_hour_event'],
            'end_hour_event' => $data['end_hour_event'],
            'room_id' => Room::where('room_name', $data['room_name'])->first()->id,
            'location' => $data['location'],
            'schedules' => $data['schedules'],
            'description' => $data['description'],
            'tariff' => $data['tariff'],
            'state' => "Pendiente",
        ]);

        // dd($events);

        $events->save();

        return response()->json([
            "status" => 200,
            "message" => "Registro creado correctamente.",
            "success" => true,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Events  events
     * @return \Illuminate\Http\Response
     */
    public function show(Event $events)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Events  $events
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $data = Encrypt::decryptArray($request->all(), 'id');

        $events = Event::where('id', $data['id'])->first();
        $events->event_name = $request->event_name;
        $events->event_date = $request->event_date;
        $events->start_hour_event = $request->start_hour_event;
        $events->end_hour_event = $request->end_hour_event;
        $events->room_id = Event::where('room_name', $request->room_name)->first()->id;
        $events->description = $request->description;
        $events->tariff = $request->tariff;
        $events->color = $request->color;
        $events->state = $request->state;
        $events->deleted_at = $request->deleted_at;

        $events->save();

        return response()->json([
            "status" => 200,
            "message" => "Registro modificado correctamente.",
            "success" => true,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Events  $events
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $data = isset($request->selected) ? $request->selected : [];

        if (count($data) > 0) {
            foreach ($data as $item) {
                $item = json_decode($item);

                Event::where('id', $id)->delete();
            }

            return response()->json([
                "status" => 200,
                "message" => "Registro eliminado correctamente.",
                "success" => true,
            ]);
        }

        $id = Encrypt::decryptValue($request->id);

        Event::where('id', $id)->delete();

        return response()->json([
            "status" => 200,
            "message" => "Registro eliminado correctamente.",
            "success" => true,
        ]);
    }
}
