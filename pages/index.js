import Banner from '../components/home/Banner';
import FeaturedPosts from '../components/home/FeaturedPosts';
import PopularPosts from '../components/home/PopularPosts';
import RecentPosts from '../components/home/RecentPosts';
import Subscription from '../components/home/Subscription';

export default function Home() {
  return (
    <>
      <Banner />
      <FeaturedPosts />
      <PopularPosts />
      <RecentPosts />
      <Subscription />
    </>
  );
}
