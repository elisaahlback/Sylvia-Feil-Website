import { FileText } from 'lucide-react';

function PaperCard({
  title,
  subtitle,
  description,
  isbn,
  doi,
  pubid,
  onClick,
  selected,
}) {
  return (
    <div
      onClick={() => onClick?.(pubid)}
      className={`cursor-pointer flex items-start gap-3 p-4 rounded-lg border border-transparent hover:border-red transition-all duration-300 break-words overflow-hidden ${
        selected ? 'bg-red text-light' : 'bg-light'
      }`}
    >
      {/* Icon */}
      <FileText
        size={28}
        className={`mt-1 shrink-0 ${
          selected ? 'text-light' : 'text-ocean'
        }`}
      />

      {/* Content */}
      <div className="text-sm">
        <p className={`font-semibold ${selected ? 'text-light' : 'text-ocean'}`}>{title}</p>

        {subtitle && (
          <p className={`italic text-xs ${selected ? 'text-light/90' : 'text-gray-600'}`}>{subtitle}</p>
        )}

        {selected && description && (
          <p className="mt-2 text-light text-xs">{description}</p>
        )}

        {isbn && selected && (
          <p className="mt-1 text-xs text-light">ISBN: {isbn}</p>
        )}

        {doi && (
          <p className="mt-1 text-xs">
            DOI:{' '}
            <a
              href={`https://doi.org/${doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`underline ${
                selected ? 'text-light' : 'text-ocean hover:text-red'
              }`}
              onClick={(e) => e.stopPropagation()} // prevent click bubbling
            >
              {doi}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

export default PaperCard;
