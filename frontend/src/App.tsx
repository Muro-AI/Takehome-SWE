import { Routes, Route } from 'react-router-dom';

/**
 * Main App Component
 *
 * TODO: Build out the chat interface with:
 * - Conversation list sidebar
 * - Message thread view
 * - Input for sending messages
 * - Streaming response display
 * - Error handling with retry
 */
function App() {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        background: '#f5f5f5',
      }}
    >
      {/* TODO: Conversation sidebar */}
      <aside
        style={{
          width: 280,
          background: '#fff',
          borderRight: '1px solid #e0e0e0',
          padding: 16,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h2 style={{ marginBottom: 16, fontSize: 18 }}>Conversations</h2>

        {/* TODO: Add "New Chat" button here */}

        {/* TODO: List conversations here */}
        <p style={{ color: '#666', fontSize: 14 }}>
          TODO: List conversations here
        </p>
      </aside>

      {/* TODO: Main chat area */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route
            path="/"
            element={
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#666',
                }}
              >
                Select a conversation or start a new one
              </div>
            }
          />
          <Route
            path="/chat/:id"
            element={
              <div style={{ flex: 1, padding: 16 }}>
                {/* TODO: Implement chat view */}
                <p>TODO: Chat view for conversation</p>
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
