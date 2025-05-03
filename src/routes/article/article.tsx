import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Layout } from '@/components';
import useFetchData from '@/hooks/fetchData';
import { ArticleCardProps } from '@/types';
import { useParams } from 'wouter';
import { formatFullDate } from '@/lib/date';
import { Skeleton } from '@/components/ui/skeleton';
import { useLocation } from 'wouter';
import { useEffect } from 'react';

const ArticlePage = () => {
  const [, navigate] = useLocation();
  const { id } = useParams();
  const { data, loading } = useFetchData<ArticleCardProps>(`articles/${id}?populate=*`, {} as ArticleCardProps);
  const { data: recommendArticle, loading: loadingReccomend } = useFetchData<ArticleCardProps[]>(`articles?_limit=3&filters[documentId][$ne]=${id}`, []);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading || loadingReccomend) {
    return (
      <Layout>
        <div className="min-h-screen bg-slate-50">
          <div className="container mx-auto px-4 py-12 space-y-6">
            <Skeleton className="h-64 w-full rounded-lg" />
            <Skeleton className="h-10 w-3/4 rounded" />
            <Skeleton className="h-6 w-1/2 rounded" />
            <Skeleton className="h-32 w-full rounded-lg" />
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <main className="w-full lg:w-2/3 my-10">
              <Card className="overflow-hidden">
              {data?.article_category?.nama_kategori === 'liputan khusus' 
                  ? null 
                  : <CardContent className="p-8">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 mb-4">
                      {data?.article_category?.nama_kategori}
                    </Badge>
                    <h1 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">
                      {data?.title}
                    </h1>
                    <div className="flex items-center mb-6">
                      <Avatar className="mr-3 h-10 w-10">
                        <AvatarImage src="/api/placeholder/40/40" alt="Author" />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <div className="text-sm text-slate-500">
                        <span className="text-slate-800 font-semibold block">Jane Smith</span>
                        <span>{formatFullDate(data?.createdAt)} • 5 min read</span>
                      </div>
                    </div>
                    <div className="prose prose-slate mb-6">
                      <p className="text-lg mb-4 text-slate-700">
                        {data.description}
                      </p>
                    </div>
                    </CardContent>
                }
                <img 
                  src={data?.cover_image}
                  alt="Featured image" 
                  className="w-full"
                />
              </Card>
            </main>

            <aside className="w-full lg:w-1/3 my-10">
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 pb-3 mb-4 border-b border-slate-100">
                    Artikel Lainnya
                  </h3>
                  <ScrollArea className="h-auto">
                    <ul className="space-y-4">
                      {recommendArticle.map((post, index) => (
                        <li key={index} className="flex items-center cursor-pointer" onClick={() => navigate(`${post.documentId}`)}>
                          <img 
                            src={post.cover_image || "https://dummyimage.com/300"} 
                            alt="Post thumbnail" 
                            className="w-16 h-16 rounded object-cover mr-3"
                          />
                          <div>
                            <h4 className="font-medium text-slate-900 text-sm">{post.title}</h4>
                            <span className="text-xs text-slate-500">{formatFullDate(post.createdAt)}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticlePage;