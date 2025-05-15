import { Card, CardContent } from '@/components/ui/card';
import { Layout } from '@/components';
import useFetchData from '@/hooks/fetchData';
import { WartaProps } from '@/types';
import { useParams } from 'wouter';
import { Skeleton } from '@/components/ui/skeleton';
import { useEffect } from 'react';

const WartaPage = () => {
  const { id } = useParams();
  const { data, loading } = useFetchData<WartaProps>(`warta-jemaats/${id}?populate=*`, {} as WartaProps);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
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
            <main className="w-full my-10">
              <Card className="overflow-hidden">
                    <CardContent className="p-8">
                    <h1 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">
                      Warta Jemaat {data.tanggal}
                    </h1>
                    <div className="prose prose-slate mb-6">
                    <iframe
                        src={data.nomor_edisi}
                        className="w-full h-[80vh] sm:h-[90vh] border"
                        title="Warta Jemaat PDF"
                        />
                    </div>
                    </CardContent>
              </Card>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WartaPage;