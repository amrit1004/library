import React from "react";
import { Button } from "../../components/ui/button";
import BookOverview from "@/components/BookOverview";
import BookList from "@/components/BookList";
import { sampleBooks } from "@/constants";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

const Home = async() => {
  const user = await db.select().from(users);
  console.log(JSON.stringify(user ,null, 2));
  return (
    <>
      <BookOverview {...sampleBooks[0]}/>
      <BookList
        title="Latest Books"
        books={sampleBooks}
        containerClassName="mt-28"
      />
    </>
  );
};

export default Home;
