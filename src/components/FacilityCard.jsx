import { Link } from 'react-router-dom'

export default function FacilityCard({ image, alt, title, description, href = '/facilities' }) {
  return (
    <Link to={href} className="group block">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        {/* Turquoise tint overlay on hover */}
        <div className="absolute inset-0 bg-turquoise opacity-0 group-hover:opacity-60 transition-opacity duration-300 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="pt-4 pb-2 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-[18px] font-bold text-ink group-hover:text-turquoise-dark transition-colors duration-150 mb-1">
            {title}
          </h3>
          <p className="text-[15px] text-ink-muted leading-relaxed">{description}</p>
        </div>
        {/* Arrow button */}
        <div className="shrink-0 mt-1 w-8 h-8 rounded-full border border-line flex items-center justify-center text-ink-muted group-hover:bg-turquoise group-hover:border-turquoise group-hover:text-white transition-all duration-150">
          <span className="text-sm">→</span>
        </div>
      </div>
    </Link>
  )
}
