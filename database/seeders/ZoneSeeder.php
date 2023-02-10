<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Zone;

class ZoneSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Zone::insert([
            [
                'id' => 1,
                'zone_name' => 'Zona central y paracentral',
                'created_at' => now(),
            ],
            [
                'id' => 2,
                'zone_name' => 'Zona occidente',
                'created_at' => now(),
            ],
            [
                'id' => 3,
                'zone_name' => 'Zona oriental',
                'created_at' => now(),
            ],
        ]);
    }
}
