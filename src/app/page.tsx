type Msg = {
  who: "Alex" | "Gavin Walsh";
  at: string;
  text: string;
};

const query = {
  subject: "500 Internal Server Error on Production Site",
  description: `Our production site is showing a "500 Internal Server Error" on every page, which is quite concerning. I noticed that the preview deployments from pull requests are working fine, so it seems limited to the production environment. I tried clearing the cache and redeploying, but the issue persists.`,
  at: "10/08/2025, 12:49:24",
};

const messages: Msg[] = [
  {
    who: "Gavin Walsh",
    at: "10/08/2025, 14:28:54",
    text: `Hi Alex,

Thanks for reaching out about this issue.
I understand that this is urgent, so I will do my best to help get your production environment back up and running as quickly as possible!

You mentioned your production site is returning a 500 error on every page, while preview deployments work fine. This often points to a difference between the production and preview environments. In many cases, it's because the live production site is missing some settings (like API URLs or login keys) that tell it where to get its data.

Since this is one of the most common issues, let's start here by checking your production environment variables: 

1. In your Vercel Dashboard, open your project.
2. Go to Settings -> Environment Variables.
3. In the Environments dropdown, switch from Preview and Development to Production.

If the variables and values are not the same in both environments, add the missing variable names and corresponding values to Production, then redeploy the site.

Once you've tried this, let me know if it resolves the error.
If the issue persists, our next step would be checking the function logs for your latest production deployment in the Vercel Dashboard which we can use to troubleshoot further.

Best regards,
Gavin Walsh
Alex Support Engineer`,
  },
  {
    who: "Alex",
    at: "10/08/2025, 14:28:57",
    text: `Thanks, Gavin. I'll check the environment variables in the production settings. I appreciate your guidance on this. Let me update those and redeploy to see if it resolves the issue.`,
  },
  {
    who: "Gavin Walsh",
    at: "10/08/2025, 14:30:27",
    text: `Sounds good. Please don't hesitate to reach out if you have any further questions.`,
  },
  {
    who: "Alex",
    at: "10/08/2025, 14:30:29",
    text: `Thank you, Gavin. I'll let you know if I need any more help. I appreciate your assistance!`,
  },
  {
    who: "Gavin Walsh",
    at: "10/08/2025, 14:36:24",
    text: `You're very welcome, happy to help!`,
  },
  {
    who: "Alex",
    at: "10/08/2025, 14:36:27",
    text: `Thanks again! Have a great day!`,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f6f9] p-4 sm:p-6">
      <div className="mx-auto max-w-2xl space-y-6">
        <section className="rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="p-4">
            <h2 className="mb-2 text-lg font-semibold text-[#16325c]">
              {query.subject}
            </h2>
            <p className="whitespace-pre-wrap text-sm text-[#16325c]">
              {query.description}
            </p>
          </div>
        </section>
        <section className="space-y-3">
          {messages.map((m, i) => {
            const mine = m.who === "Gavin Walsh";
            return (
              <div
                key={i}
                className={`w-fit max-w-full rounded-lg border shadow-sm ${
                  mine
                    ? "ml-auto border-[#cfe5fb] bg-[#eaf5fe] text-[#16325c]"
                    : "border-gray-200 bg-white text-[#16325c]"
                }`}
              >
                <div className="px-3 pt-2 text-[11px] text-[#5e6a81]">
                  {m.who} • {m.at}
                </div>
                <div className="whitespace-pre-wrap px-3 pb-3 text-sm leading-relaxed">
                  {m.text}
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}
