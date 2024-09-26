"use client";

import { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

// Define the cache and stale time as constants
const CACHE_AND_STALE_TIME = 86400000; // 24 hours in milliseconds

// Define the query client configuration as a constant
const queryClientConfig = {
	defaultOptions: {
		queries: {
			staleTime: CACHE_AND_STALE_TIME, // 24 hours
			cacheTime: CACHE_AND_STALE_TIME, // 24 hours
		},
	},
};

function Providers({ children }: React.PropsWithChildren) {
	// Use the query client configuration when creating the client
	const [client] = useState(new QueryClient(queryClientConfig));

	return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default Providers;
