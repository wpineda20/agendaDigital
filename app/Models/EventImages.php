<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\SoftDeletes;

class EventImages extends Model
{
    use HasFactory;

    // protected $table = 'event_images';

    // public $incrementing = true;

    // protected $data = ['deleted_at'];

    protected $fillable = [
        'id',
        'event_id',
        'image_url',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    // public $hidden = [
    //     'created_at',
    //     'updated_at',
    //     'deleted_at',
    // ];

    // public $timestamps = false;
}
