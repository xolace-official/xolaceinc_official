import { SmoothScroll } from "@/layout/smooth-scroll";
import EventHero from "@/features/get-involved/events/event-hero";
import EventTypes from "@/features/get-involved/events/event-types";
import UpcomingEvents from "@/features/get-involved/events/upcoming-events";
import EventGallery from "@/features/get-involved/events/event-gallery";
import InviteXolace from "@/features/get-involved/events/invite-xolace";
import EventCTA from "@/features/get-involved/events/event-cta";

const EventsPage = () => {
  return (
    <main className="flex items-start justify-start w-full min-h-screen bg-background text-foreground font-sans">
      <SmoothScroll>
        <div className="flex w-full flex-col bg-background">
          <EventHero />

          <EventTypes />

          {/* Upcoming events — corner bracket cards, register CTA */}
          <UpcomingEvents />

          {/* Past events gallery — photo grid */}

          {/* Invite Xolace — host an event, submit request */}
          <InviteXolace />

          {/* CTA — Don't follow the movement. Join it. */}
          <EventCTA />
        </div>
      </SmoothScroll>
    </main>
  );
};

export default EventsPage;