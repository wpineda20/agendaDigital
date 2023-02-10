<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roleAdmin = Role::findOrFail(1);
        $roleUser = Role::findOrFail(2);

        $user = User::create([
            'id' => 1,
            'name' => 'admin',
            'last_name' => 'admin',
            'dui' => '02475605-7',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('12345678'),
            'name' => 'Administrador',
            'email_verified_at' => now(),
        ]);
        $user->assignRole($roleAdmin);
    }
}
