import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  ExternalLink,
  Globe,
  Info,
  Mail,
  MessageCircle,
  Package,
  Layers,
  Tag,
} from 'lucide-react';
import {
  ProductSpecification,
  getWhatsAppProductUrl,
  getWhatsAppFrozenProductUrl,
  getContactProductUrl,
} from '@/data/tradeData';

interface ProductCardProps {
  product: ProductSpecification;
  priorityImage?: boolean;
}

export function ProductCard({ product, priorityImage = false }: ProductCardProps) {
  const whatsappUrl =
    product.category === 'frozen'
      ? getWhatsAppFrozenProductUrl(product.name)
      : getWhatsAppProductUrl(product.name);
  const contactUrl = getContactProductUrl(product.name);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const imageSrc = product.image.startsWith('http')
    ? product.image
    : `${basePath}${product.image}`;
  const altText =
    product.imageAlt ||
    `${product.name} - Export Grade Agricultural Product | KRISHI SARTHAK VENTURES LLP`;

  return (
    <article
      id={`product-${product.slug}`}
      className="group flex flex-col h-full rounded-xl border border-[#ddd8ca] bg-[#fbf9f2] transition-all duration-300 hover:border-[#D9A441] hover:shadow-xl hover:-translate-y-1 overflow-hidden"
    >
      {/* Product Image Box */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#e8e2cf] shrink-0">
        <img
          src={imageSrc}
          alt={altText}
          loading={priorityImage ? 'eager' : 'lazy'}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#102c20]/80 via-transparent to-black/20 pointer-events-none" />

        {/* Category & HS Code Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="rounded-sm border border-white/30 bg-[#1d392d]/90 px-2.5 py-1 text-[9.5px] font-bold uppercase tracking-wider text-[#f5ebd2] backdrop-blur-xs">
            {product.category === 'frozen'
              ? 'Frozen – IQF'
              : product.category === 'fruit'
              ? 'Fresh Fruit'
              : 'Fresh Vegetable'}
          </span>
          <span className="rounded-sm border border-[#D9A441]/70 bg-[#D9A441] px-2.5 py-1 text-[9.5px] font-bold text-[#0a1826] shadow-xs">
            HS: {product.hsCode}
          </span>
        </div>

        {/* Shelf-Life pill */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-medium">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-xs">
            <Clock size={12} className="text-[#D9A441]" />
            <span>
              {product.storage ? `${product.storage} · ` : ''}Shelf Life: {product.shelfLife}
            </span>
          </span>
          <span className="rounded-full bg-[#214c39]/80 px-2 py-0.5 text-[10px] text-[#f7f4eb]">
            Export Grade
          </span>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="flex flex-col flex-1 p-5 md:p-6 justify-between">
        <div>
          {/* Header & Description */}
          <div className="border-b border-[#e5dfd2] pb-4">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display text-2xl font-semibold text-[#183c2c] group-hover:text-[#967235] transition-colors">
                {product.name}
              </h3>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-[#5a6b5e]">
              {product.description}
            </p>
          </div>

          {/* Reference Market Context Note (if provided, e.g. Dragon Fruit) */}
          {product.marketNote && (
            <div className="mt-3 flex items-start gap-2 rounded-md bg-[#eee7d7] p-2.5 text-[10.5px] text-[#695d46]">
              <Info size={14} className="mt-0.5 shrink-0 text-[#967235]" />
              <p className="leading-snug">{product.marketNote}</p>
            </div>
          )}

          {/* Structured Technical Specifications Table */}
          <div className="mt-4 overflow-hidden rounded-lg border border-[#e2dccf] bg-[#f5f0e4]/60">
            <table className="w-full text-left text-[11px] border-collapse">
              <thead>
                <tr className="border-b border-[#e2dccf] bg-[#eadecb] text-[#223d2e]">
                  <th
                    scope="col"
                    className="w-[36%] py-1.5 px-3 font-bold text-[10px] uppercase tracking-wider"
                  >
                    Specification
                  </th>
                  <th
                    scope="col"
                    className="py-1.5 px-3 font-bold text-[10px] uppercase tracking-wider"
                  >
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dccf]">
                <tr>
                  <th
                    scope="row"
                    className="w-[36%] bg-[#efe8da] py-2 px-3 font-semibold text-[#304537] whitespace-nowrap"
                  >
                    HS Code
                  </th>
                  <td className="py-2 px-3 text-[#183c2c] font-mono font-bold">
                    {product.hsCode}
                  </td>
                </tr>
                {product.productType && (
                  <tr>
                    <th
                      scope="row"
                      className="w-[36%] bg-[#efe8da] py-2 px-3 font-semibold text-[#304537] whitespace-nowrap"
                    >
                      Product Type
                    </th>
                    <td className="py-2 px-3 text-[#495b4e] font-medium">
                      {product.productType}
                    </td>
                  </tr>
                )}
                {product.storage && (
                  <tr>
                    <th
                      scope="row"
                      className="w-[36%] bg-[#efe8da] py-2 px-3 font-semibold text-[#304537] whitespace-nowrap"
                    >
                      Storage
                    </th>
                    <td className="py-2 px-3 text-[#183c2c] font-medium">
                      {product.storage}
                    </td>
                  </tr>
                )}
                <tr>
                  <th
                    scope="row"
                    className="w-[36%] bg-[#efe8da] py-2 px-3 font-semibold text-[#304537] whitespace-nowrap"
                  >
                    Shelf Life
                  </th>
                  <td className="py-2 px-3 text-[#495b4e]">
                    {product.shelfLife}
                  </td>
                </tr>
                {product.varieties && (
                  <tr>
                    <th
                      scope="row"
                      className="w-[36%] bg-[#efe8da] py-2 px-3 font-semibold text-[#304537] whitespace-nowrap align-top"
                    >
                      Varieties
                    </th>
                    <td className="py-2 px-3 text-[#2d4234] font-medium">
                      {product.varieties}
                    </td>
                  </tr>
                )}
                {product.packaging && (
                  <tr>
                    <th
                      scope="row"
                      className="w-[36%] bg-[#efe8da] py-2 px-3 font-semibold text-[#304537] whitespace-nowrap align-top"
                    >
                      Packaging
                    </th>
                    <td className="py-2 px-3 text-[#495b4e]">
                      {product.packaging}
                    </td>
                  </tr>
                )}
                <tr>
                  <th
                    scope="row"
                    className="w-[36%] bg-[#efe8da] py-2 px-3 font-semibold text-[#304537] whitespace-nowrap align-top"
                  >
                    Target Markets
                  </th>
                  <td className="py-2 px-3 text-[#223d2e] font-medium leading-snug">
                    {product.markets}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Buttons Section */}
        <div className="mt-6 pt-4 border-t border-[#e2dccf] space-y-2.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {/* WhatsApp Enquiry Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Enquire about ${product.name} on WhatsApp`}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#1f7a42] px-3.5 py-2.5 text-xs font-bold text-white transition-all hover:bg-[#186335] active:bg-[#124d29] shadow-xs"
            >
              <MessageCircle size={15} className="shrink-0" />
              <span>WhatsApp Enquiry</span>
            </a>

            {/* Send Enquiry Button */}
            <Link
              href={contactUrl}
              aria-label={`Send enquiry form for ${product.name}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[#214c39] bg-[#214c39] px-3.5 py-2.5 text-xs font-bold text-[#f7f4eb] transition-all hover:bg-[#173a2a] active:bg-[#102b1f] shadow-xs"
            >
              <Mail size={14} className="shrink-0 text-[#D9A441]" />
              <span>Send Enquiry</span>
            </Link>
          </div>

          {/* Read More button only rendered if a verified detail page exists */}
          {product.hasDetailPage && (
            <div className="pt-1 text-center">
              <Link
                href={`/products/${product.slug}/`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8b682d] hover:text-[#214c39] hover:underline"
              >
                <span>Read Full Product Details</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
