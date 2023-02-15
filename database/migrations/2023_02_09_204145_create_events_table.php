<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('event_name');
            $table->string('cast_name')->nullable();
            $table->date('event_date');
            $table->string('start_hour_event');
            $table->string('end_hour_event');
            $table->foreignId('room_id')->constrained('rooms');
            $table->string('location')->nullable();
            $table->text('description')->nullable();
            $table->text('schedules')->nullable();
            $table->text('tariff')->nullable();
            $table->text('site_url')->nullable();
            $table->text('event_file')->nullable();
            $table->string('color')->default('blue')->nullable();
            $table->string('state')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
};
