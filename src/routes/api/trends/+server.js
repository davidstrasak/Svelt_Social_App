import { json } from "@sveltejs/kit";

const randomize = () => Math.floor(Math.random() * 500);

export function GET() {
  const trends = [
    {
      category: "Sports",
      content: "Some team won the championship",
      glideCount: randomize()
    },
    {
      category: "Politics",
      content: "Some politician did something",
      glideCount: randomize()
    },
    {
      category: "Technology",
      content: "Some company released a new product",
      glideCount: randomize()
    },
    {
      category: "Entertainment",
      content: "Some actor did something",
      glideCount: randomize()
    },
    {
      category: "Health",
      content: "Some new disease is spreading",
      glideCount: randomize()
    },
    {
      category: "Science",
      content: "Some new discovery was made",
      glideCount: randomize()
    }
  ];
  return json(trends);
}
