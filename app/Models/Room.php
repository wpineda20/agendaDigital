<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'rooms';

    public $incrementing = true;

    protected $data = ['deleted_at'];

    protected $fillable = [
        'id', 'room_name', 'place_id', 'deleted_at', 'created_at', 'updated_at', 
    ];

    public $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public $timestamps = true;

    public static function allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage)
    {
        return Room::select('rooms.*', 'places.*', 'rooms.id as id')
        ->join('places', 'rooms.place_id', '=', 'places.id')

		->where('rooms.room_name', 'like', $search)

        ->skip($skip)
        ->take($itemsPerPage)
        ->orderBy("rooms.$sortBy", $sort)
        ->get();
    }

    public static function counterPagination($search)
    {
        return Room::select('rooms.*', 'places.*', 'rooms.id as id')
        ->join('places', 'rooms.place_id', '=', 'places.id')

		->where('rooms.room_name', 'like', $search)

        ->count();
    }
}
