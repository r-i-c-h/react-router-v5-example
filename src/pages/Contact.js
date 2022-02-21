import { useLocation } from "react-router-dom";

export default function Contact() {
  // ?name=mario&foo=bar
  const queryString = useLocation().search;

  const paramsObj = new URLSearchParams(queryString);
  console.log(paramsObj.keys());

  const name = paramsObj.get("name");

  return (
    <div>
      <h2>Hey {name}, Contact Us</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam explicabo laudantium nemo voluptas cum omnis error voluptate. Nihil numquam ipsum necessitatibus hic odit neque consequuntur dolor. Magni quos ratione iste.</p>
    </div>
  );
}
