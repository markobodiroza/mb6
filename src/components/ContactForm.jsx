import { useId, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import siteMeta from '@/data/siteMeta'
import {
  budgetRanges,
  contactTopics,
  emailHref,
  proficiencyLevels,
} from '@/lib/contact'

const inputStyles =
  'block w-full rounded-xl border-2 border-field bg-paper px-4 py-3 text-[1.0625rem] text-ink transition-colors duration-200 placeholder:text-muted hover:border-graphite focus:border-link focus:outline-hidden aria-invalid:border-danger-line'

const errorText = 'text-[0.9375rem] font-semibold text-danger'

const selectStyles = clsx(inputStyles, 'appearance-none pr-12')

// Select with a chevron drawn in a theme token instead of a fixed color
function Select({ className, children, ...props }) {
  return (
    <div className="relative">
      <select className={className} {...props}>
        {children}
      </select>
      <svg
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
      >
        <path
          d="m5 8 5 5 5-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

const emptyValues = {
  name: '',
  email: '',
  website: '',
  topic: '',
  budget: '',
  proficiency: '',
  message: '',
}

function Field({ label, hint, error, children, id }) {
  return (
    <div>
      <label htmlFor={id} className="flex items-baseline justify-between gap-4">
        <span className="font-bold">{label}</span>
        {hint && (
          <span className="text-right text-[0.9375rem] text-muted">
            <span className="sr-only">, </span>
            {hint}
          </span>
        )}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`${id}-error`} className={clsx('mt-2', errorText)}>
          {error}
        </p>
      )}
    </div>
  )
}

function validate(values) {
  let errors = {}
  if (values.name.trim().split(/\s+/).filter(Boolean).length < 2) {
    errors.name = 'Please add your first and last name.'
  }
  if (!values.email.trim()) {
    errors.email = 'Please add your email so I can reply.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'That email looks incomplete. Check for a typo?'
  }
  if (!values.website.trim()) {
    errors.website = 'Please add your company website.'
  } else if (
    !/^(https?:\/\/)?[^\s./]+(\.[^\s./]+)+(\/\S*)?$/i.test(
      values.website.trim()
    )
  ) {
    errors.website =
      'That does not look like a web address. Try yourcompany.com'
  }
  if (!values.topic) errors.topic = 'Please pick what you need help with.'
  if (!values.budget) errors.budget = 'Please pick a budget range.'
  if (!values.proficiency) {
    errors.proficiency = 'Please pick the level that fits best.'
  }
  if (values.message.trim().length < 20) {
    errors.message = 'A few sentences about the project help a lot.'
  }
  return errors
}

function SuccessMessage({ name, viaEmail }) {
  return (
    <div
      role="status"
      className="rounded-[1.25rem] bg-citron p-8 text-on-citron sm:p-10"
    >
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-14 w-14">
        <circle
          cx="24"
          cy="24"
          r="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="m14 25 7 7 13-15"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="check-draw"
        />
      </svg>
      {viaEmail ? (
        <>
          <h2 className="text-section mt-6">Almost There</h2>
          <p className="text-lead mt-4 max-w-lg">
            Your email app should now be open with your inquiry filled in. Hit
            send there and it lands straight in my inbox.
          </p>
        </>
      ) : (
        <>
          <h2 className="text-section mt-6">
            Thanks{name ? `, ${name.trim().split(' ')[0]}` : ''}. Inquiry
            Received.
          </h2>
          <p className="text-lead mt-4 max-w-lg">
            I will review your project and get back to you with a suggested next
            step.
          </p>
        </>
      )}
    </div>
  )
}

function ProficiencyPicker({ id, value, onChange, error }) {
  let selected = proficiencyLevels.find(
    (level) => String(level.value) === value
  )

  return (
    <fieldset aria-describedby={error ? `${id}-error` : undefined}>
      <legend className="flex w-full items-baseline justify-between gap-4">
        <span className="font-bold">How AI-Forward Is Your Company?</span>
      </legend>
      <p className="mt-1 text-[0.9375rem] text-graphite">
        1 means just exploring, 5 means AI is built into how you work.
      </p>
      <div className="mt-3 grid gap-2 sm:grid-cols-5">
        {proficiencyLevels.map((level) => {
          let checked = String(level.value) === value
          return (
            <label
              key={level.value}
              className={clsx(
                'relative flex cursor-pointer items-center gap-4 rounded-xl border-2 px-4 py-3 transition-colors duration-200 has-focus-visible:outline-solid has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-(--focus) sm:flex-col sm:gap-1 sm:px-1 sm:text-center',
                checked
                  ? 'tile-pop border-action bg-action text-action-fg'
                  : error
                  ? 'border-danger-line hover:border-graphite'
                  : 'border-field hover:border-graphite'
              )}
            >
              <input
                type="radio"
                name="proficiency"
                value={level.value}
                checked={checked}
                onChange={onChange}
                className="sr-only"
              />
              <span className="text-[1.375rem] font-[850] leading-none">
                {level.value}
              </span>
              <span className="text-[0.9375rem] font-semibold leading-tight sm:text-[0.8125rem]">
                {level.label}
              </span>
            </label>
          )
        })}
      </div>
      <p
        className="mt-3 min-h-6 text-[0.9375rem] text-graphite"
        aria-live="polite"
      >
        {selected && (
          <>
            <span className="font-bold text-ink">{selected.label}:</span>{' '}
            {selected.description}
          </>
        )}
      </p>
      {error && (
        <p id={`${id}-error`} className={errorText}>
          {error}
        </p>
      )}
    </fieldset>
  )
}

export function ContactForm() {
  let router = useRouter()
  let id = useId()
  let formRef = useRef(null)
  let [values, setValues] = useState(emptyValues)
  let [errors, setErrors] = useState({})
  let [status, setStatus] = useState('idle')
  let [queryTopic, setQueryTopic] = useState()

  // Preselect the topic from links like /contact?topic=Team%20Workshop. The
  // query arrives after hydration, so state is adjusted while rendering.
  let topic = router.query.topic
  if (topic !== queryTopic) {
    setQueryTopic(topic)
    if (typeof topic === 'string' && contactTopics.includes(topic)) {
      setValues((current) => ({ ...current, topic }))
    }
  }

  function update(event) {
    let { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }))
    }
  }

  async function onSubmit(event) {
    event.preventDefault()

    // Honeypot: real people never fill this hidden field
    if (event.target.elements._gotcha.value) return

    let nextErrors = validate(values)
    setErrors(nextErrors)
    let firstInvalid = Object.keys(nextErrors)[0]
    if (firstInvalid) {
      let field = formRef.current.elements[firstInvalid]
      // Radio groups come back as a list; focus the first option
      ;(field instanceof RadioNodeList ? field[0] : field).focus()
      return
    }

    let level = proficiencyLevels.find(
      (item) => String(item.value) === values.proficiency
    )
    let inquiry = {
      ...values,
      website: values.website.trim(),
      proficiency: `${level.value} of 5: ${level.label}`,
    }

    if (!siteMeta.formEndpoint) {
      let body = [
        `Name: ${inquiry.name}`,
        `Email: ${inquiry.email}`,
        `Website: ${inquiry.website}`,
        `Topic: ${inquiry.topic}`,
        `Budget: ${inquiry.budget}`,
        `AI proficiency: ${inquiry.proficiency}`,
        '',
        inquiry.message,
      ].join('\n')
      window.location.href = emailHref(
        `Project inquiry: ${inquiry.topic}`,
        body
      )
      setStatus('sent-email')
      return
    }

    setStatus('sending')
    try {
      let response = await fetch(siteMeta.formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        // _subject sets the email subject in Formspree; email becomes reply-to
        body: JSON.stringify({
          ...inquiry,
          _subject: `Project inquiry from ${inquiry.name}: ${inquiry.topic}`,
        }),
      })
      if (!response.ok) throw new Error(`Form returned ${response.status}`)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent' || status === 'sent-email') {
    return (
      <SuccessMessage name={values.name} viaEmail={status === 'sent-email'} />
    )
  }

  let fieldId = (name) => `${id}-${name}`
  let errorProps = (name) =>
    errors[name]
      ? { 'aria-invalid': true, 'aria-describedby': `${fieldId(name)}-error` }
      : {}

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} className="space-y-8">
      <p className="text-[0.9375rem] font-semibold text-graphite">
        All fields are required.
      </p>
      <div className="grid gap-7 sm:grid-cols-2">
        <Field label="Your Full Name" id={fieldId('name')} error={errors.name}>
          <input
            id={fieldId('name')}
            name="name"
            autoComplete="name"
            required
            value={values.name}
            onChange={update}
            className={inputStyles}
            {...errorProps('name')}
          />
        </Field>
        <Field label="Work Email" id={fieldId('email')} error={errors.email}>
          <input
            id={fieldId('email')}
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={update}
            className={inputStyles}
            {...errorProps('email')}
          />
        </Field>
      </div>
      <Field
        label="Company Website"
        id={fieldId('website')}
        error={errors.website}
      >
        <input
          id={fieldId('website')}
          name="website"
          type="url"
          inputMode="url"
          autoComplete="url"
          placeholder="yourcompany.com"
          required
          value={values.website}
          onChange={update}
          className={inputStyles}
          {...errorProps('website')}
        />
      </Field>
      <div className="grid gap-7 sm:grid-cols-2">
        <Field
          label="What Do You Need?"
          id={fieldId('topic')}
          error={errors.topic}
        >
          <Select
            id={fieldId('topic')}
            name="topic"
            required
            value={values.topic}
            onChange={update}
            className={clsx(selectStyles, !values.topic && 'text-muted')}
            {...errorProps('topic')}
          >
            <option value="" disabled>
              Select one
            </option>
            {contactTopics.map((topic) => (
              <option key={topic} className="text-ink">
                {topic}
              </option>
            ))}
          </Select>
        </Field>
        <Field
          label="Budget Range"
          id={fieldId('budget')}
          error={errors.budget}
        >
          <Select
            id={fieldId('budget')}
            name="budget"
            required
            value={values.budget}
            onChange={update}
            className={clsx(selectStyles, !values.budget && 'text-muted')}
            {...errorProps('budget')}
          >
            <option value="" disabled>
              Select a range
            </option>
            {budgetRanges.map((range) => (
              <option key={range} className="text-ink">
                {range}
              </option>
            ))}
          </Select>
        </Field>
      </div>
      <ProficiencyPicker
        id={fieldId('proficiency')}
        value={values.proficiency}
        onChange={update}
        error={errors.proficiency}
      />
      <Field
        label="About Your Project"
        hint="Goals, team size and where AI could help"
        id={fieldId('message')}
        error={errors.message}
      >
        <textarea
          id={fieldId('message')}
          name="message"
          rows={6}
          required
          value={values.message}
          onChange={update}
          className={clsx(inputStyles, 'resize-y leading-[1.6]')}
          {...errorProps('message')}
        />
      </Field>
      <div aria-hidden="true" className="hidden">
        <label>
          Leave this empty
          <input name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {status === 'error' && (
        <p
          role="alert"
          className="rounded-xl border-2 border-danger-line p-4 font-semibold"
        >
          Your inquiry did not go through, usually because of a connection
          problem. Your answers are still here, so please try again, or reach me
          on{' '}
          <a href={siteMeta.author.linkedin} className="link">
            LinkedIn
          </a>
          .
        </p>
      )}
      <div className="space-y-3">
        <Button
          type="submit"
          className="w-full sm:w-auto"
          disabled={status === 'sending'}
          aria-disabled={status === 'sending'}
        >
          {status === 'sending' ? (
            <>
              <span
                aria-hidden="true"
                className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent motion-reduce:animate-none"
              />
              Sending…
            </>
          ) : (
            'Send Inquiry'
          )}
        </Button>
        <p className="text-[0.9375rem] text-muted">
          Your inquiry is delivered through Formspree and used only to reply to
          you.
        </p>
      </div>
    </form>
  )
}
