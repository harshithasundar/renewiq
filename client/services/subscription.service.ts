import api from "./api";

export const getSubscriptions = async () => {
  const response = await api.get("/subscriptions");
  return response.data.subscriptions;
};

export const createSubscription = async (data: any) => {
  const response = await api.post("/subscriptions", data);
  return response.data.subscription;
};

export const updateSubscription = async (
  id: string,
  data: any
) => {
  const response = await api.patch(
    `/subscriptions/${id}`,
    data
  );

  return response.data.subscription;
};

export const deleteSubscription = async (id: string) => {
  const response = await api.delete(`/subscriptions/${id}`);
  return response.data;
};