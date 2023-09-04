"use client";

import { useState, useEffect } from "react";

import { RefreshIcon, CopyIcon, Spinner } from "@/shared/ui";
import { quoteApi, Quote } from "@/shared/api";

const Home = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [quote, setQuote] = useState<Quote>();

	useEffect(() => {
		getRandomQuote();
	}, []);

	const getRandomQuote = async () => {
		setLoading(true);

		const randomQuoteResponse = await quoteApi.quote.getRandomQuote();

		if (randomQuoteResponse.status === 200) {
			const randomQuote: Quote = randomQuoteResponse.data[0];

			if (
				randomQuote &&
				typeof randomQuote === "object" &&
				"author" in randomQuote &&
				"category" in randomQuote &&
				"quote" in randomQuote
			) {
				setQuote(randomQuote);
			} else {
				console.error("Invalid quote format:", randomQuote);
			}

			setLoading(false);
		} else {
			console.error("Failed to fetch random quote");

			setLoading(false);
		}
	};

	const handleQuoteRefresh = () => getRandomQuote();

	const handleQuoteCopy = () => {
		const quoteToCopy = `${quote?.quote} - ${quote?.author}`;

		navigator.clipboard
			.writeText(quoteToCopy)
			.then(() => {
				console.log("Text copied to clipboard");
			})
			.catch((error) => {
				console.error("Error copying text to clipboard:", error);
			});
	};

	return (
		<main className="flex flex-col items-center">
			<section className="flex flex-col items-center justify-center h-[100vh] ml-[40px] mr-[40px]">
				<figure className="mb-[18px]">
					<blockquote>
						<p className="text-[18px] max-w-[800px] break-words text-center">
							{quote?.quote}
						</p>
					</blockquote>
					<figcaption className="text-right mt-[12px]">{quote?.author}</figcaption>
				</figure>
				<div className="flex flex-row gap-x-[10px]">
					<div
						className="tooltip tooltip-bottom"
						data-tip="Refresh">
						<button
							className="btn btn-circle"
							onClick={handleQuoteRefresh}>
							{loading ? (
								<Spinner
									width={20}
									height={20}
								/>
							) : (
								<RefreshIcon
									width={20}
									height={20}
									color={"rgb(31, 41, 55)"}
								/>
							)}
						</button>
					</div>
					<div
						className="tooltip tooltip-bottom"
						data-tip="Copy">
						<button
							className="btn btn-circle"
							onClick={handleQuoteCopy}>
							<CopyIcon
								width={20}
								height={20}
								color={"rgb(31, 41, 55)"}
							/>
						</button>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Home;
