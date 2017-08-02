<!DOCTYPE html>
<html lang="en">
    <head>
        @include('partials._head')
    </head>
    <body>
        <img src="images/logoBlue.png" id="loader_img" class="loader animated fadeIn">
        <div id="page-wrap">
            @include('partials._selector')
            <div class="container">
                @include('partials._navbar')
                @include('partials._cv')
                <div id="main-content">
                    <div id="guts">
                        @include('pages.home')
                    </div>
                </div>
            </div>
            @include('partials._footer')
        </div>
