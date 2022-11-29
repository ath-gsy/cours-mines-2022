import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImhfYnAydVgyQVBUTEtfTDJ6YTZNdCJ9.eyJpc3MiOiJodHRwczovL2Rldi12ZHQ4aDZvOGswbDV2MndqLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2Mzc3YjUwN2MzY2ZlZDY3OGFjMGQ0YjIiLCJhdWQiOlsiaHR0cHM6Ly9iZWVwZXItYXBpIiwiaHR0cHM6Ly9kZXYtdmR0OGg2bzhrMGw1djJ3ai51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjY5NjM4ODM4LCJleHAiOjE2Njk3MjUyMzgsImF6cCI6ImF3MUZaVFJxSTRRYzM0cjV3TGxDSjE3d3EzcmdNZjluIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCJ9.qfY4WzQps6mZjgvCr-OFSElQTxu9-AhKdGgseIUHsf3QNQYWYGQCy3VC4HSC-hp09eqHGXzmXAmkZTkPtDuGuk6eBZzfPOKHcMZmBV4BfQJ4KZXSfbaNYlb_AcdMzhhdzvbUfZIZ7e-3T5ToQAgvJVNxwUYTJSqbZa6IScfBzL6aWmPuxhqbvuLnza7Djnd4GMIPoQAfTlU4Dv97Jo4UJhBTyx2EAn0LHvgQ9hRDyKH_iwz62J3g5kWPSdTIMoAHULhAhsnKh2VsZrt5OgXOEANADKEnOl7CyCtWi_OWfvQYCgNdlM0NnSJJcn_faltL4W536HC1Mo4Ng3sbD2fXAw`,
  },
});
