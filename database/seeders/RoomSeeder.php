<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Room;

class RoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Room::insert([
            // San Salvador Theater
            [
                'id' => 1,
                'room_name' => 'Gran Sala',
                'place_id' => 1,
                'created_at' => now(),
            ],
            [
                'id' => 2,
                'room_name' => 'Pequeña sala',
                'place_id' => 1,
                'created_at' => now(),
            ],
            [
                'id' => 3,
                'room_name' => 'Salón Foyer',
                'place_id' => 1,
                'created_at' => now(),
            ],
            [
                'id' => 4,
                'room_name' => 'Sala de cámara',
                'place_id' => 1,
                'created_at' => now(),
            ],
            // Santa Ana Theater
            [
                'id' => 5,
                'room_name' => 'Salón Foyer',
                'place_id' => 2,
                'created_at' => now(),
            ],
            [
                'id' => 6,
                'room_name' => 'Gran sala',
                'place_id' => 2,
                'created_at' => now(),
            ],
            [
                'id' => 7,
                'room_name' => 'Salón cantina',
                'place_id' => 2,
                'created_at' => now(),
            ],
            // President Theater
            [
                'id' => 8,
                'room_name' => 'Lobby',
                'place_id' => 3,
                'created_at' => now(),
            ],
            [
                'id' => 9,
                'room_name' => 'Gran sala',
                'place_id' => 3,
                'created_at' => now(),
            ],
            // San Miguel Theater
            [
                'id' => 10,
                'room_name' => 'Gran sala',
                'place_id' => 4,
                'created_at' => now(),
            ],
        ]);
    }
}
