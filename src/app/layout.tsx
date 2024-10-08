import { SidebarLayout } from "@/components/Organisms/sidebar-layout";
import { Avatar } from "@/components/Atoms/avatar";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/components/Molecules/dropdown";
import {
  Navbar,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from "@/components/Atoms/navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  // SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  // SidebarSpacer,
} from "@/components/Atoms/sidebar";
import {
  ArrowRightStartOnRectangleIcon,
  // ChevronDownIcon,
  ChevronUpIcon,
  Cog8ToothIcon,
  LightBulbIcon,
  // PlusIcon,
  ShieldCheckIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import {
  Cog6ToothIcon,
  HomeIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  // MegaphoneIcon,
  // QuestionMarkCircleIcon,
  // SparklesIcon,
  Square2StackIcon,
  TicketIcon,
} from "@heroicons/react/20/solid";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { RequestStoreProvider } from "@/providers/request-provider";
import { UserStoreProvider } from "@/providers/user-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Approve",
  description: "An app for meeting request approvals",
};

const sidebar_links = [
  { href: "/", label: "Home" },
  { href: "/profile", label: "My Profile" },
  { href: "/", label: "Home" },
  { href: "/", label: "Home" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarLayout
          // mobile navbar
          navbar={
            <Navbar>
              <NavbarSpacer />
              <NavbarSection>
                <NavbarItem href="/search" aria-label="Search">
                  <MagnifyingGlassIcon />
                </NavbarItem>
                <NavbarItem href="/inbox" aria-label="Inbox">
                  <InboxIcon />
                </NavbarItem>
                <Dropdown>
                  <DropdownButton as={NavbarItem}>
                    <Avatar src="/cw_pro_pi_se.jpg" square />
                  </DropdownButton>
                  <DropdownMenu className="min-w-64" anchor="bottom end">
                    <DropdownItem href="/my-profile">
                      <UserIcon />
                      <DropdownLabel>My profile</DropdownLabel>
                    </DropdownItem>
                    <DropdownItem href="/settings">
                      <Cog8ToothIcon />
                      <DropdownLabel>Settings</DropdownLabel>
                    </DropdownItem>
                    <DropdownDivider />
                    <DropdownItem href="/privacy-policy">
                      <ShieldCheckIcon />
                      <DropdownLabel>Privacy policy</DropdownLabel>
                    </DropdownItem>
                    <DropdownItem href="/share-feedback">
                      <LightBulbIcon />
                      <DropdownLabel>Share feedback</DropdownLabel>
                    </DropdownItem>
                    <DropdownDivider />
                    <DropdownItem href="/logout">
                      <ArrowRightStartOnRectangleIcon />
                      <DropdownLabel>Sign out</DropdownLabel>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavbarSection>
            </Navbar>
          }
          sidebar={
            <Sidebar>
              <SidebarHeader>
                {/* top dropdown */}
                {/* <Dropdown>
                  <DropdownButton as={SidebarItem} className="lg:mb-2.5">
                    <Avatar src="/tailwind-logo.svg" />
                    <SidebarLabel>Tailwind Labs</SidebarLabel>
                    <ChevronDownIcon />
                  </DropdownButton>
                  <DropdownMenu
                    className="min-w-80 lg:min-w-64"
                    anchor="bottom start"
                  >
                    <DropdownItem href="/teams/1/settings">
                      <Cog8ToothIcon />
                      <DropdownLabel>Settings</DropdownLabel>
                    </DropdownItem>
                    <DropdownDivider />
                    <DropdownItem href="/teams/1">
                      <Avatar slot="icon" src="/tailwind-logo.svg" />
                      <DropdownLabel>Tailwind Labs</DropdownLabel>
                    </DropdownItem>
                    <DropdownItem href="/teams/2">
                      <Avatar
                        slot="icon"
                        initials="WC"
                        className="bg-purple-500 text-white"
                      />
                      <DropdownLabel>Workcation</DropdownLabel>
                    </DropdownItem>
                    <DropdownDivider />
                    <DropdownItem href="/teams/create">
                      <PlusIcon />
                      <DropdownLabel>New team&hellip;</DropdownLabel>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown> */}
                {/* search (for request) & inbox (use for request notifications) */}
                <SidebarSection className="max-lg:hidden">
                  <SidebarItem href="/search">
                    <MagnifyingGlassIcon />
                    <SidebarLabel>Search</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/inbox">
                    <InboxIcon />
                    <SidebarLabel>Inbox</SidebarLabel>
                  </SidebarItem>
                </SidebarSection>
              </SidebarHeader>
              <SidebarBody>
                {/* sidebar nav (use for navigation) */}
                <SidebarSection>
                  <SidebarItem href="/">
                    <HomeIcon />
                    <SidebarLabel>Home</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/request">
                    <Square2StackIcon />
                    <SidebarLabel>Meeting Request</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/debrief">
                    <TicketIcon />
                    <SidebarLabel>Meeting Debrief</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/settings">
                    <Cog6ToothIcon />
                    <SidebarLabel>Settings</SidebarLabel>
                  </SidebarItem>
                </SidebarSection>
                {/* sidebar link list (use to display open requests) */}
                {/* <SidebarSection className="max-lg:hidden">
                  <SidebarHeading>Pending Requests</SidebarHeading>
                  <SidebarItem href="/requests/1">
                    Vivek R. @ Oracle
                  </SidebarItem>
                  <SidebarItem href="/requests/2">
                    Paul S. @ Microsoft
                  </SidebarItem>
                  <SidebarItem href="/requests/3">Kaleem R. @ USAA</SidebarItem>
                  <SidebarItem href="/requests/4">Kevin P. @ Tesla</SidebarItem>
                </SidebarSection>
                <SidebarSpacer /> */}
                {/* <SidebarSection>
                  <SidebarItem href="/support">
                    <QuestionMarkCircleIcon />
                    <SidebarLabel>Support</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/changelog">
                    <SparklesIcon />
                    <SidebarLabel>Changelog</SidebarLabel>
                  </SidebarItem>
                </SidebarSection> */}
              </SidebarBody>
              {/* sidebar pop up */}
              <SidebarFooter className="max-lg:hidden">
                <Dropdown>
                  <DropdownButton as={SidebarItem}>
                    <span className="flex min-w-0 items-center gap-3">
                      <Avatar
                        initials="CW"
                        src="/cw_pro_pi_se.jpg"
                        alt="profile photo of user"
                        square
                      />
                      <span className="min-w-0">
                        <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">
                          Chris
                        </span>
                        <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                          chris@motobumtech.com
                        </span>
                      </span>
                    </span>
                    <ChevronUpIcon />
                  </DropdownButton>
                  <DropdownMenu className="min-w-64" anchor="top start">
                    <DropdownItem href="/my-profile">
                      <UserIcon />
                      <DropdownLabel>My profile</DropdownLabel>
                    </DropdownItem>
                    <DropdownItem href="/settings">
                      <Cog8ToothIcon />
                      <DropdownLabel>Settings</DropdownLabel>
                    </DropdownItem>
                    {/* <DropdownDivider />
                    <DropdownItem href="/privacy-policy">
                      <ShieldCheckIcon />
                      <DropdownLabel>Privacy policy</DropdownLabel>
                    </DropdownItem>
                    <DropdownItem href="/share-feedback">
                      <LightBulbIcon />
                      <DropdownLabel>Share feedback</DropdownLabel>
                    </DropdownItem> */}
                    <DropdownDivider />
                    <DropdownItem href="/logout">
                      <ArrowRightStartOnRectangleIcon />
                      <DropdownLabel>Sign out</DropdownLabel>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </SidebarFooter>
            </Sidebar>
          }
        >
          <UserStoreProvider>
            <RequestStoreProvider>{children}</RequestStoreProvider>
          </UserStoreProvider>
        </SidebarLayout>
      </body>
    </html>
  );
}
