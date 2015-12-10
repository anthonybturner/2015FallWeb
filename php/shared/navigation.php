<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="<?= $path ?>">Fitness App</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse">
      <ul id="navigation" class="nav navbar-nav">
        <li><a href="<?= $path ?>">Home<span class="sr-only">(current)</span></a></li>
        <li><a href="<?= $path ?>food">Nutrition</a></li>
         <li><a href="<?= $path ?>exercise">Exercise</a></li>
        <li><a href="<?= $path ?>friends">Friends</a></li>       
        <li><a href="<?= $path ?>profile">Profile</a></li>

        
      </ul>
      <form class="navbar-form navbar-right" role="search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>