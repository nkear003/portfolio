<!DOCTYPE html>
<html lang="en">
    <head>
        @include('partials._head')
    </head>
    <body>
    @include('partials._analytics')
        <div id="page-wrap">
            <div class="container">
                @include('partials._navbar')
                @include('partials._cv')
                <div id="main-content" class="hide">
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
        </div>
    @include('partials._footer')
@section('scripts')
<script type="text/javascript" src="js/lightbox.min.js"></script>
@endsection
@section('css')
<link href="css/lightbox.min.css" rel="stylesheet">
@endsection