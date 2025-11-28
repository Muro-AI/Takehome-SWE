import { Router } from 'express';
import { db } from '../db.js';
import { v4 as uuidv4 } from 'uuid';
import { createAIStream, type Message } from '../openai-stream.js';

const router = Router();

/**
 * GET /api/chats
 * List all conversations, ordered by most recent first
 */
router.get('/', (req, res) => {
  // TODO: Implement
  // Return all conversations from the database, ordered by updated_at DESC
  res.status(501).json({ error: 'Not implemented' });
});

/**
 * POST /api/chats
 * Create a new conversation
 * Body: { title?: string }
 */
router.post('/', (req, res) => {
  // TODO: Implement
  // Create a new conversation and return it
  res.status(501).json({ error: 'Not implemented' });
});

/**
 * GET /api/chats/:id
 * Get a single conversation by ID
 */
router.get('/:id', (req, res) => {
  // TODO: Implement
  // Return the conversation with the given ID, or 404 if not found
  res.status(501).json({ error: 'Not implemented' });
});

/**
 * PATCH /api/chats/:id
 * Update conversation (e.g., title)
 * Body: { title: string }
 */
router.patch('/:id', (req, res) => {
  // TODO: Implement
  // Update the conversation title and updated_at timestamp
  res.status(501).json({ error: 'Not implemented' });
});

/**
 * DELETE /api/chats/:id
 * Delete a conversation and all its messages
 */
router.delete('/:id', (req, res) => {
  // TODO: Implement
  // Delete the conversation (messages will cascade delete)
  res.status(501).json({ error: 'Not implemented' });
});

/**
 * GET /api/chats/:id/messages
 * Get all messages for a conversation
 */
router.get('/:id/messages', (req, res) => {
  // TODO: Implement
  // Return all messages for the conversation, ordered by created_at ASC
  res.status(501).json({ error: 'Not implemented' });
});

/**
 * POST /api/chats/:id/messages
 * Send a user message and stream back AI response via SSE
 * Body: { content: string }
 *
 * This endpoint should:
 * 1. Save the user message to the database
 * 2. Create a placeholder assistant message (status: 'sending')
 * 3. Stream the AI response using SSE
 * 4. Update the assistant message when complete (or on error)
 *
 * SSE Format:
 *   event: chunk
 *   data: {"content": "word "}
 *
 *   event: done
 *   data: {"messageId": "xxx", "content": "full response"}
 *
 *   event: error
 *   data: {"error": "error message"}
 */
router.post('/:id/messages', (req, res) => {
  // TODO: Implement SSE streaming
  //
  // Hints:
  // - Set headers for SSE: Content-Type: text/event-stream
  // - Use createAIStream() from openai-stream.ts
  // - You can pass conversation history for context (optional but improves responses)
  // - Remember to handle client disconnect (req.on('close', ...))
  // - Update message status in DB when done or on error
  //
  // Example usage of createAIStream:
  //   const cleanup = createAIStream(
  //     userMessage,
  //     (chunk) => { /* send SSE chunk */ },
  //     (error) => { /* handle error */ },
  //     (fullResponse) => { /* save to DB, send done event */ },
  //     { conversationHistory: previousMessages }
  //   );

  res.status(501).json({ error: 'Not implemented' });
});

export default router;
