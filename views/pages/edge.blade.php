@extends('page')

@section('title', ' | Edge')

@section('content')
<div class="row">
    <div class="offset-by-one ten columns">
        <hr class="no-show hrsmall">
        <a data-lightbox="logo" data-title="Steyoyoke Edge Logo" href="images/edge/edge-logo.png"><img src="images/edge/edge-logo.png" style="box-shadow:none"></a>
        <hr class="no-show hrsmall">
        <hr>
        <p><a href="https://edge.steyoyoke.com/" target="_blank"><b>Steyoyoke Edge</b></a> is a subscription-based music download service of Steyoyoke Recordings.</p>
        <p>Description from website:</p>

        <blockquote>
            <p>Steyoyoke Edge is the newest addition to the Steyoyoke brand. This annual membership will give you the chance to get all the Steyoyoke and Steyoyoke Black digital releases. Once you become a member, you will be able to download all the releases for one year, on the same day it’s released on Beatport. You will also get a special coupon code which will give you a discount of 20% on all the products on the Steyoyoke Shop for the entire year. Membership includes: – Download of all the DIGITAL releases for one year – 20% of discount on the Steyoyoke Shop for one year</p>
        </blockquote>

        <p>The previous developer already had created this site, but when the site was planned, they didn't add a function to limit downloads to the year in which the member's subscription lasts.</p>
        <p>I left the HTML and CSS from the previous developer, but remade the login and download system using a database to store credentials and list the available downloads.</p>
        <p><a href="https://github.com/nkear003/edge" target="_blank">This project is viewable on <b>GitHub</b></a></p>
        <hr>

    </div>
</div>
<div class="row">
    <div class="offset-by-one five columns">
        <h2>Login Page</h2>
        <a data-lightbox="login" data-title="Steyoyoke Edge | Login Page" href="images/edge/full_edge-login-page.png"><img src="images/edge/edge-login-page.png"></a>
        <hr class="hrsmall no-show">
        <h2>Account Page</h2>
        <a data-lightbox="account" data-title="Steyoyoke Edge | Account Page" href="images/edge/full_edge-account-page.png"><img src="images/edge/edge-account-page.png"></a>
    </div>
    <div class="five columns">
        <h2>Downloads Page</h2>
        <a data-lightbox="downloads" data-title="Steyoyoke Edge | Downloads Page" href="images/edge/full_edge-download-page.png"><img src="images/edge/edge-download-page.png"></a>
    </div>
</div>
@endsection