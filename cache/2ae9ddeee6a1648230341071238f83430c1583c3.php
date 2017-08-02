<!DOCTYPE html>
<html lang="en">
    <head>
        <?php echo $__env->make('partials._head', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
    </head>
    <body>
        <img src="images/logoBlue.png" id="loader_img" class="loader animated fadeIn">
        <div id="page-wrap">
            <?php echo $__env->make('partials._selector', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
            <div class="container">
                <?php echo $__env->make('partials._navbar', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                <?php echo $__env->make('partials._cv', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                <div id="main-content" class="links">
                    <div id="guts">
                        <?php echo $__env->yieldContent('content'); ?>
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
    <?php echo $__env->make('partials._footer', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
