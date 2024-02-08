<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = new User();
        $user->name = "admin";
        $user->email = "admin@javiierdu.com";
        $user->password = Hash::make("12345678");
        $user->save();

        $userTwo = new User();
        $userTwo->name = "root";
        $userTwo->email = "root@javiierdu.com";
        $userTwo->password = Hash::make("24823972");
        $userTwo->save();
    }
}
