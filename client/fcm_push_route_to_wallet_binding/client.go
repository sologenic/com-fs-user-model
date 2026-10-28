package user

import (
	"context"
	"sync"

	grpcdef "github.com/sologenic/com-fs-user-model"
	grpcclient "github.com/sologenic/com-fs-utils-internal-lib/go/grpc-client"
)

const (
	endpoint = "USER_STORE"
)

var (
	client     grpcdef.FCMPushRouteToWalletBindingServiceClient
	grpcClient *grpcclient.GRPCClient
	once       sync.Once
)

func initClient() {
	grpcClient = grpcclient.InitClient(endpoint)
	client = grpcdef.NewFCMPushRouteToWalletBindingServiceClient(grpcClient.Conn)
}

func Client() grpcdef.FCMPushRouteToWalletBindingServiceClient {
	once.Do(initClient)
	return client
}

func AuthCtx(ctx context.Context) context.Context {
	once.Do(initClient)
	return grpcClient.AuthCtx(ctx)
}
