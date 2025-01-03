// const { mutateAsync: initChatFn, isPending } = useMutation({
//     mutationKey: ["init-chat"],
//     mutationFn: (data: PromptFormType) =>
//       initChat({ ...data, prompt: data.prompt.trim(), isPrivateMode: isPrivateMode }),
//     onSuccess: (response) => {
//       queryClient.refetchQueries({ queryKey: ["get-chats"] });

//       setIsAnswersModalOpen(true);

//       router.push(`/chats/${(response.data as InitModalChatResponse).chatId}`);
//     },
//     onError: (error: LimitReachedError) => {
//       setIsAnswersModalOpen(false);
//       if (error.response?.status === 401) {
//         toast.error("Something went wrong, probably due to long inactivity. Please try again.");
//         return removeToken();
//       }

//       if (!error.response?.data.limitReached) {
//         toast.error(error.response?.data.message || "Oops! Something went wrong.");
//       }
//     },
//   });



// const { data: response, refetch } = useQuery({
//     queryKey: [`collaboration-${collaborationId}`],
//     queryFn: () => getCollaborators(collaborationId),
//     enabled: !!collaborationId,
//   });


// Api.ts 


// export const getCollaborators = (
//     collaborationId: string,
//   ): Promise<AxiosResponse<GetCollaboratorsResponse>> => {
//     return apiClient.get<GetCollaboratorsResponse>(`/collaborations/${collaborationId}`);
//   };


// export const inviteCollaborator = (
//     data: InviteCollaboratorRequest,
//   ): Promise<AxiosResponse<InviteCollaboratorResponse>> => {
//     const requestData = {
//       email: data.email,
//       permission: data.permission,
//     };
//     return apiClient.post<InviteCollaboratorResponse>(
//       `/collaborations/${data.collaborationId}/invite`,
//       requestData,
//     );
//   };