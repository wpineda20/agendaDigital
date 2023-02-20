<?php

namespace App\Http\Controllers;

use App\Models\Room;
use App\Models\Event;
use App\Models\EventImages;
use Illuminate\Support\Facades\Storage;
use DB;
use Crypt;

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

        //Validation schedules
        $disponibility = $this->validateSchedules($request->all());

        if (
            $disponibility['total'] > 0
        ) {
            return response()->json([
                'success' => false,
                'status' => 200,
                'message' => $disponibility['message'],
                'state' => 'error',
            ]);
        }

        $data = $request->except(['place_name']);

        if ($data['event_file']) {

            $data['event_file'] = FileController::base64ToFile($data['event_file'], date("Y-m-dHs") . '-file', 'event_file');

            $eventFile = asset($data['event_file']);
        } else {
            $eventFile = null;
        }

        if (FileController::verifyTypeImage($data['cover_image'])) {

            $data['cover_image'] = FileController::base64ToFile($data['cover_image'], date("Y-m-dHs") . '-cover', 'cover_image');

            $coverImage = asset($data['cover_image']);
        }

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
            'site_url' => $data['site_url'],
            'tariff' => $data['tariff'],
            'event_file' => $eventFile,
            'cover_image' => $coverImage,
            'state' => "Pendiente",
        ]);

        $events->save();

        return response()->json([
            "status" => 200,
            "message" => "Registro creado correctamente.",
            "success" => true,
        ]);
    }

    /**
     * Validate Primary Event
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function validateSchedules(array $data)
    {
        $disponibility = [
            'total' => 0,
            'messsage' => "Compruebe la disponibilidad de los eventos.",
        ];

        $startDate = date("Hi", strtotime($data['event_date'] . " " . $data['start_hour_event']));
        $endDate = date("Hi", strtotime($data['event_date'] . " " . $data['end_hour_event']));


        if ($startDate >= $endDate) {
            $disponibility['message'] = "La hora de inicio del evento no puede ser igual o mayor que la de fin.";
            $disponibility['total'] = 1;

            return $disponibility;
        }

        // if ($data['event_date'] <= now()) {
        //     $disponibility['message'] = "La fecha del evento no puede ser menor o igual a la fecha actual.";
        //     $disponibility['total'] = 1;

        //     return $disponibility;
        // }

        $total = Event::join('rooms', 'rooms.id', '=', 'events.room_id')
            ->where('room_name', $data['room_name'])
            ->where('event_date', $data['event_date'])
            ->whereRaw(
                "(start_hour_event >= ? and end_hour_event <= ?)",
                [$data['start_hour_event'], $data['end_hour_event']]
            )
            ->count();

        $disponibility['total'] = $total;
        $disponibility['message'] = 'Comprueba la disponibilidad de horarios.';

        return $disponibility;
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

        $room = Room::where('room_name', $request->room_name)->first();

        if (substr($data['event_file'], 0, 20) == "data:application/pdf") {

            $data['event_file'] = FileController::base64ToFile($data['event_file'], date("Y-m-dHs") . '-file', 'event_file');

            $eventFile = asset($data['event_file']);
        } else {
            $eventFile = $data['event_file'];
        }

        if (FileController::verifyTypeImage($data['cover_image'])) {

            $data['cover_image'] = FileController::base64ToFile($data['cover_image'], date("Y-m-dHs") . '-cover', 'cover_image');

            $coverImage = asset($data['cover_image']);
        } else {
            $coverImage = $data['cover_image'];
        }

        Event::where('id', $data['id'])->update([
            'event_name' => $data['event_name'],
            'cast_name' => $data['cast_name'],
            'event_date' => $data['event_date'],
            'start_hour_event' => $data['start_hour_event'],
            'end_hour_event' => $data['end_hour_event'],
            'room_id' => $room->id,
            'location' => $data['location'],
            'schedules' => $data['schedules'],
            'description' => $data['description'],
            'site_url' => $data['site_url'],
            'event_file' => $eventFile,
            'cover_image' => $coverImage,
            'tariff' => $data['tariff'],
            'state' => "Pendiente",
        ]);

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

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function scheduleEvents(Request $request)
    {
        $current_date = date('Y-m-d');

        $scheduleEvents = Event::select(
            'events.*',
            'events.id as event_id',
            'rooms.room_name',
            'places.place_name'
        )
            ->join('rooms', 'events.room_id', '=', 'rooms.id')
            ->join('places', 'rooms.place_id', '=', 'places.id')
            ->whereDate('events.event_date', $current_date)
            ->get();

        foreach ($scheduleEvents as $event) {

            $event->images = EventImages::where('id', $event->id)->get();
        }

        return response()->json(['message' => 'success', 'scheduleEvents' => $scheduleEvents]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function searchByCalendar(Request $request)
    {
        $events = Event::select(
            'events.*',
            'events.id as event_id',
            'rooms.room_name',
            'places.place_name'
        )
            ->join('rooms', 'events.room_id', '=', 'rooms.id')
            ->join('places', 'rooms.place_id', '=', 'places.id')
            ->whereDate('events.event_date', $request->date)
            ->get();

        foreach ($events as $event) {

            $event->images = EventImages::where('id', $event->id)->get();
        }

        return response()->json(['message' => 'success', 'events' => $events]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function searchEvents(Request $request)
    {
        $current_date = date('Y-m-d');

        $events = Event::select(
            'events.*',
            'events.id as event_id',
            'rooms.room_name',
            'places.place_name'
        )
            ->join('rooms', 'events.room_id', '=', 'rooms.id')
            ->join('places', 'rooms.place_id', '=', 'places.id')
            ->whereDate('events.event_date', $current_date)
            ->where(
                'events.event_name',
                'like',
                $request->search . '%'
            )
            ->get();

        foreach ($events as $event) {

            $event->images = EventImages::where('id', $event->id)->get();
        }

        return response()->json(['message' => 'success', 'events' => $events]);
    }
}
