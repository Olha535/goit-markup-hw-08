( ( )  =>  { 
  const  menuBtnRef  =  document . querySelector ( "[data-menu-button]" ) ; 
  const  mobileMenuRef  =  document . querySelector ( "[data-menu]" ) ; 
  const  mobileBtnClose  =  document . querySelector ( "[данные -menu-close] " ) ;

  menuBtnRef . addEventListener ( "клик" ,  ( )  =>  { 
    mobileMenuRef . classList . toggle ( "is-open" ) ; 
  } ) ;

  mobileBtnClose . addEventListener ( "клик" ,  ( )  =>  { 
    mobileMenuRef . classList . toggle ( "is-open" ) ; 
  } ) ; 
} ) ( ) ;