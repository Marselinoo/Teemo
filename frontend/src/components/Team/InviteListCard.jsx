import InviteCard from "./InviteCard";

export default function InviteListSection({ invites }) {
  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      
      <h2 className="text-center text-xl font-semibold">
        💌 Undangan Bergabung
      </h2>

      {invites.map((invite) => (
        <InviteCard key={invite.id} invite={invite} />
      ))}
    </div>
  );
}