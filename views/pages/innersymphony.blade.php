@extends('page')

@section('title', ' | Inner Symphony')

@section('content')
<div class="row">
    <div class="offset-by-one ten columns">

        <hr>
        <p><a href="http://innersymphony.net/" target="_blank"><b>Inner Symphony</b></a> is a sub-label of Steyoyoke Recordings. I build the site by customizing a free Wordpress theme.</p>
        <p>The front page fills with the latest releases, and each release page has release info, a Soundcloud player, purchasing links, and a Youtube player. The bottom of the release page fills automatically with the most recent releases.</p>
        <hr>

    </div>
</div> 
<div class="row">
    <div class="offset-by-one five columns">
        <h2><a href="http://innersymphony.net/" target="_blank">Front Page</a></h2>
        <a data-lightbox="front" data-title="Inner Symphony | Front Page" href="images/innersymphony/full_innersymphony-front-page.png"><img src="images/innersymphony/innersymphony-front-page.png"></a>
        <hr class="hrsmall no-show">
        <h2><a href="http://innersymphony.net/podcasts/" target="_blank">Podcasts Page</a>
        </h2>
        <a data-lightbox="podcasts" data-title="Inner Symphony | Podcasts Page" href="images/innersymphony/full_innersymphony-podcasts-page.png"><img src="images/innersymphony/innersymphony-podcasts-page.png" class=""></a>
    </div>
    <div class="five columns">
        <h2><a href="http://innersymphony.net/is001/" target="_blank">Release Page</a></h2>
        <a data-lightbox="release" data-title="Inner Symphony | Release Page" href="images/innersymphony/full_innersymphony-release-page.png"><img src="images/innersymphony/innersymphony-release-page.png"></a>
    </div>
</div>
@endsection