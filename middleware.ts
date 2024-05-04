import { NextResponse } from 'next/server';
import type { NextFetchEvent, NextRequest } from 'next/server'


export default function middleware(request: NextRequest, event: NextFetchEvent) {
   

   if(request.nextUrl.pathname.startsWith('/Genre/Fantasy')){


    event.waitUntil(

      (async () => {


        try {

          
          // Make the fetch call without the body for a GET request
         // const response = await fetch('https://catfact.ninja/fact');
          
          // Assuming the response is JSON
        //  const data = await response.json();

         // console.log("")
        //  console.log(data.fact);
         // console.log("")
        } catch (error) {
          // It's a good idea to catch any potential errors to avoid unhandled promise rejections
        //  console.error('Fetch error:', error);
        }

       
       //  const intervalId = setInterval(() => {
       //    console.log('Refresh token was call every 20 seconds...');
       //   }, 30000); // 10000 milliseconds = 10 seconds
       //  return () => clearInterval(intervalId);

      }
      
      )()
    );


   }



   // if (request.nextUrl.pathname.startsWith('/Genre/History')) {
 //     return NextResponse.redirect(new URL('/', request.url))
  // }

   
    return NextResponse.next();
  }



