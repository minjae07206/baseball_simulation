'use client'
import Image from "next/image";
import {Button} from '@/components/ui/button';
import { setupMatch } from "@/eventhandlers/setupMatch";
import { setupWorld } from "@/eventhandlers/setupWorld";

export default function Home() {
  
  return (
    <main>
      <Button onClick={()=>setupWorld()}>Create World</Button>
    </main>
  );
}
