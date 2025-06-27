import type { Lead } from '@/models/lead';
import { api } from './api';

export const LeadService = {
  getPending: async (): Promise<Lead[]> => {
    const response = await api.get<Lead[]>('/leads/pending');
    return response.data;
  },

  getAccepted: async (): Promise<Lead[]> => {
    const response = await api.get<Lead[]>('/leads/accepted');
    return response.data;
  },

  approve: async (id: string): Promise<void> => {
    await api.post(`/leads/${id}/approve`);
  },

  decline: async (id: string): Promise<void> => {
    await api.post(`/leads/${id}/decline`);
  },
};
