import { QueryClient } from '@tanstack/react-query';

// إنشاء Query Client مع إعدادات افتراضية
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // البيانات تعتبر حديثة لمدة 5 دقائق
      gcTime: 10 * 60 * 1000,   // وقت الاحتفاظ بالبيانات في الكاش (cache)
      retry: 1,                  // إعادة المحاولة مرة واحدة فقط عند الفشل
      refetchOnWindowFocus: false, // لا تعيد جلب البيانات عند التركيز على النافذة
      refetchOnReconnect: true,   // أعد جلب البيانات عند إعادة الاتصال بالإنترنت
    },
  },
});

export default queryClient;