<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Place;

class PlaceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Place::insert([
            [
                'id' => 1,
                'place_name' => 'Teatro Nacional de San Salvador',
                'zone_id' => 1,
                'created_at' => now(),
            ],
            [
                'id' => 2,
                'place_name' => 'Teatro Nacional de Santa Ana',
                'zone_id' => 1,
                'created_at' => now(),
            ],
            [
                'id' => 3,
                'place_name' => 'Teatro Presidente',
                'zone_id' => 1,
                'created_at' => now(),
            ],
            [
                'id' => 4,
                'place_name' => 'Teatro Nacional de San Miguel',
                'zone_id' => 1,
                'created_at' => now(),
            ],
        ]);
    }
}
