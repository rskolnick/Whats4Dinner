"use client";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./toggle";

export default function TopNav() {
	return (
		<NavigationMenu className='bg-slate-300 flex items-center justify-center'>
			<NavigationMenuList className='w-full flex items-center justify-between'>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Item One</NavigationMenuTrigger>
					<NavigationMenuContent>
						<NavigationMenuLink>Link</NavigationMenuLink>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<ModeToggle />
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
