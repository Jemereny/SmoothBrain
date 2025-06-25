# Concepts
---

## Some terms to take note
ReAct agent - Basically another term for an Agentic AI, REasoning and ACTing. Agentic AI reasons and performs actions to give response

## How does an Agentic AI work?
Based on the prompt from user and context it receives from tools, it will then generate a response to the user after deciding what is the best response. The response may not be correct but if ithe model decides if it is the best response it will return that response to the user

## Components to an AI Agent
1. Components: Brain
    1. The LLM that handles reasoning, planning and language generation. (Deepseek, OpenAI, Gemini etc..)
1. Memory
    1. Can be any memory store but is mainly used as a cache to check context of previous conversation of the current session (redis, sql, in-memory)
1. Tools/Plguins
    1. How agent interacts with external sources
        1. Retrieve data from web etc...
    1. Taking Action
        1. Send email, update database, etc...
    1. Orchestration
        1. Call other agents

## Difference between AI agents and AI workflow
1. AI Agent
    1. Can react to what is already there or asked and act based on required
    1. Can refine answers using other AI to provide the best answer available
    1. Replaces the manual process of adjusting prompts to get the best answer
1. AI Workflow
    1. A workflow defined by a human e.g. Do A, B, C
        1. E.g. Prompts need to be adjusted to get a better answer


## Model Context Protocol (MCP)

1. Terms
    1. Resources
        1. Like "GET" in REST, to provide and expose data to LLMs and should not have side-effects
1. Tools
    1. Like "POST" in REST, perform actions
1. Prompts
    1. Templates to help LLMs interact with server - Can treat like it adds onto the message to add context or help with explanation. (NEED RESEARCH)
1. Standardized mechanism that provides Reflection to clients
    1. Reflection - Provides schemas when requested
1. MCP should support targeted use cases
1. Hosted in multiple ways
    1. stdio
    1. streamable-http (NEW, server-friendly)
        1. More HTTP like request-response
            1. Initialisation request to server returns a session-id (UUID)
            1. Next request from client is to confirm and wait for server to accept the request
            1. State is now "stored"
            1. Client can now send HTTP POST with session-id
            1. No long-lived connection is required
        1. Similar but with SSE.
            1. HTTP request from clients
            1. Server opens SSE - enables streaming of messages back
            1. Sends messages via SSE
            1. Closes SSE connection
    1. SSE (deprecating)
1. Clients have to ask what the server supports before it can perform actions or get resources
1. TODO: Too many tools may hinder AI performance as it has to decide what to use and may use the wrong tool for the job. Need to figure out the best amount of APIs
