import getConversations from "../actions/getConversations";
import ConversationList from "../components/conversations/ConversationList";
import Sidebar from "../components/sidebar/Sidebar";

const ConversationsLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const conversations = await getConversations();

  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
};

export default ConversationsLayout;
