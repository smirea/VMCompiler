window.onload = function(){
    
  var VMC = new VMCompiler( {
    textarea             : 'VMC_textarea', 
    stackHolder          : 'VMC_stackHolder', 
    startButton          : 'VMC_Start',
    sseButton            : 'VMC_SSE',
    stackEvolution       : 'VMC_stackEvolution',
    overlay              : 'overlay',
    optMaxInstructions   : 'opt_maxInstructions',
    sseCode              : 'SSE_code',
    sseStack             : 'SSE_stack',
    sseEvolution         : 'SSE_evolution',
    sseNext              : 'SSE_next',
    ssePrev              : 'SSE_prev',
    sseStartTimer        : 'SSE_startTimer',
    sseTimeout           : 'SSE_timeout',
    sseForward           : 'SSE_timer_forward',
    sseBackward          : 'SSE_timer_backward',
    ssePosition          : 'SSE_position',
    sseClose             : 'SSE_close'
  } );
  
  var menu        = document.getElementById('menu');
  var links       = menu.getElementsByClassName('link');
  var containers  = menu.getElementsByClassName('container');
  var selected    = null;
  
  for( var i=0; i<links.length; ++i ){
    links[i].menuIndex  = i;
    links[i].onclick    = function(){
      if( selected != this ){
        deselect( selected );
        select( this );
      } else {
        deselect( this );
        selected = null;
      }
    };
  };
  
  var tables = menu.getElementsByTagName( 'table' );
  for( var i=0; i<tables.length; ++i ){
    var tr = tables[i].getElementsByTagName( 'tr' );
    for( var j=0; j<tr.length; ++j ){
      addClass( tr[j], j % 2 == 0 ? 'even' : 'odd' );
    }
  }
  
  select( links[0] );
  
  function select( elem ){
    if( selected ) deselect( selected );
    if( elem ){
      containers[ elem.menuIndex ].style.display = 'block';
      addClass( elem, 'selected' );
      selected = elem;
    }
  };
  function deselect( elem ){
    if( elem ){
      containers[ elem.menuIndex ].style.display = 'none';
      removeClass( elem, 'selected' );
    }
  }
  
  function hasClass(ele,cls) {
    return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
  }
  function addClass(ele,cls) {
    if (!hasClass(ele,cls)) ele.className += " "+cls;
  }
  function removeClass(ele,cls) {
    if (hasClass(ele,cls)) {
      var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
      ele.className=ele.className.replace(reg,' ');
    }
  }
};