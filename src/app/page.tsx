import { clientWalaCode } from "@/utils/clientWalaCode";
import { sensitiveServerCode } from "@/utils/sensitiveServerCode";
import ServerComponent1 from "./components/server-Component1";
import ClientComponent1 from "./components/client-component1";


export default function Home() {
  sensitiveServerCode();
  // clientWalaCode(); yo code leuda error aaucha bcoz of client only. use client garera error hatauna milcha but server code le feri error dine vayo.
  //So client only code client component mai use garum. server only server component mai use garum.
  return (
   <div>
    <h1 className="text-3xl font-bold underline">
     Hello world!
    </h1>
    <ServerComponent1 />   
     <ClientComponent1 />
   </div>
  );
}

//serverko code server ma chalyo. yo page.tsx by default server component ho. sensitiveServerCode() function call gareko

// <ServerComponent1 /> hamro Home page server component ho , yeha server component rakhna milyo.
//<ClientComponent1 /> hamro Home page Server component ho , yeha client component import garera rakhna milyo.