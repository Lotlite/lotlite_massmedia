import Image from 'next/image';

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen">
      <div className="relative">
        <Image
          src="/images/digital_head_image.webp"
          alt="Digital Marketing"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="relative">
        <Image
          src="/images/digital_marketing.png"
          alt="Digital Strategy"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
} 