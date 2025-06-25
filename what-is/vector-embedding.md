# Vector Embedding & Databases
## What is a Vector Embedding?
1. Basically a 1D array of real numbers that represent a weight along a dimension that captures semantic meaning
    1. These data points breaks down a word into it's features and context
        1. e.g. The word "bank" can have different meanings: River Bank or Financial Institution Bank
1. "Dimensions" of a vector
    1. It is a semantic-meaning of the item in this particular scale
    1. How X is this on the scale? 
1. Vector embeddings database
    1. Transform words, images and other types of data into numerical representations for computers to understand and manipulate
1. What is this in the context of AI?
    1. Internally, the AI generates embeddings to understand context of questions and to identify relationships between words to generate answers for the users.
      1. To give the model more context, we pre-process data and generate embeddings to be stored beforehand. These embeddings are then given the model to process as additional context and information before 
    1. In an AI, it internally generates embeddings to understand context of questions to identify relationships between words
    1. To generate vector embeddings and query, the same model should be used as the generated embeddings can be different when models are trained differently.

1. Is it used outside of the context of AI?
    1. They are heavily intertwined with AI and ML.
    1. Without AI, embeddings are generated through algorithms
        1. For example, converting text to vectors based on word counts or frequency, converting images based on color or structure, etc..
    1. Used where semantic understanding isn't required
        1. e.g. Keyword search
