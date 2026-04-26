import { useState } from 'react';

/**
 * Shared form state hook.
 * Replaces the repeated useState + onChange pattern across all form components.
 *
 * Usage:
 *   const { formData, onChange, setFormData } = useFormState({ name: '', email: '' });
 */
export default function useFormState(initialValues) {
  const [formData, setFormData] = useState(initialValues);
  const onChange = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  return { formData, onChange, setFormData };
}
