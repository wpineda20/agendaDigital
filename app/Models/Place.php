<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Place extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'places';

    public $incrementing = true;

    protected $data = ['deleted_at'];

    protected $fillable = [
        'id', 'place_name', 'deleted_at', 'created_at', 'updated_at',
    ];

    public $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public $timestamps = true;

    public static function allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage)
    {
        return Place::select('places.*', 'zones.*', 'places.id as id')
            ->join('zones', 'places.zone_id', '=', 'zones.id')

            ->where('places.place_name', 'like', $search)

            ->skip($skip)
            ->take($itemsPerPage)
            ->orderBy("places.$sortBy", $sort)
            ->get();
    }

    public static function counterPagination($search)
    {
        return Place::select('places.*', 'zones.*', 'places.id as id')
            ->join('zones', 'places.zone_id', '=', 'zones.id')

            ->where('places.place_name', 'like', $search)

            ->count();
    }
}
