<!DOCTYPE html>
<html lang="en">
    <head>
        @include('partials._head')
    </head>
    <body>
<!--        <img src="images/logoBlue.png" id="loader_img" class="loader animated fadeIn">-->
        <div id="page-wrap" class="animated fadeIn">
            @include('partials._selector')
            <div class="container">
                @include('partials._navbar')
                @include('partials._cv')
                <div id="main-content" class="links">
                    <div id="guts">
                        @yield('content')
                    </div>
                </div>
                <hr class="no-show">
                <div class="row">
                    <div class="offset-by-one ten columns" style="text-align:center">
                        <p><a href="home.php">Home</a> | <a href="#" target="_top">Back to Top</a></p>
                    </div>
                </div>
                <hr class="no-show">
            </div> <!--end container-->
    @include('partials._footer')
