<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'events';

    public $incrementing = true;

    protected $data = ['deleted_at'];

    protected $fillable = [
        'event_name',
        'cast_name',
        'event_date',
        'start_hour_event',
        'end_hour_event',
        'room_id',
        'location',
        'description',
        'schedules',
        'tariff',
        'site_url',
        'event_file',
        'cover_image',
        'color',
        'state',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public $timestamps = true;

    public static function allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage)
    {
        return Event::select('events.*', 'rooms.*', 'events.id as id', 'places.id as id_place,', 'places.place_name')
            ->join('rooms', 'events.room_id', '=', 'rooms.id')
            ->join('places', 'rooms.place_id', '=', 'places.id')

            ->where('events.event_name', 'like', $search)

            ->skip($skip)
            ->take($itemsPerPage)
            ->orderBy("events.$sortBy", $sort)
            ->get();
    }

    public static function counterPagination($search)
    {
        return Event::select('events.*', 'rooms.*', 'events.id as id', 'places.id as id_place,', 'places.place_name')
            ->join('rooms', 'events.room_id', '=', 'rooms.id')
            ->join('places', 'rooms.place_id', '=', 'places.id')

            ->where('events.event_name', 'like', $search)

            ->count();
    }
}
